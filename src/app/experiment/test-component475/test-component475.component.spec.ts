import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent475Component } from './test-component475.component';

describe('TestComponent475Component', () => {
  let component: TestComponent475Component;
  let fixture: ComponentFixture<TestComponent475Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent475Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent475Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
