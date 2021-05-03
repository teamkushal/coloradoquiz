import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent534Component } from './test-component534.component';

describe('TestComponent534Component', () => {
  let component: TestComponent534Component;
  let fixture: ComponentFixture<TestComponent534Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent534Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent534Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
