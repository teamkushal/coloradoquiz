import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent579Component } from './test-component579.component';

describe('TestComponent579Component', () => {
  let component: TestComponent579Component;
  let fixture: ComponentFixture<TestComponent579Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent579Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent579Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
