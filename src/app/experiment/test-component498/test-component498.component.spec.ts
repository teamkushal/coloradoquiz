import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent498Component } from './test-component498.component';

describe('TestComponent498Component', () => {
  let component: TestComponent498Component;
  let fixture: ComponentFixture<TestComponent498Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent498Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent498Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
