import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2931Component } from './test-component2931.component';

describe('TestComponent2931Component', () => {
  let component: TestComponent2931Component;
  let fixture: ComponentFixture<TestComponent2931Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2931Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
