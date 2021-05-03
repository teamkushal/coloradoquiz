import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2388Component } from './test-component2388.component';

describe('TestComponent2388Component', () => {
  let component: TestComponent2388Component;
  let fixture: ComponentFixture<TestComponent2388Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2388Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2388Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
