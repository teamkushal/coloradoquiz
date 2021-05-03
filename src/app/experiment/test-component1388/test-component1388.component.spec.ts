import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1388Component } from './test-component1388.component';

describe('TestComponent1388Component', () => {
  let component: TestComponent1388Component;
  let fixture: ComponentFixture<TestComponent1388Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1388Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1388Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
