import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent793Component } from './test-component793.component';

describe('TestComponent793Component', () => {
  let component: TestComponent793Component;
  let fixture: ComponentFixture<TestComponent793Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent793Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent793Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
