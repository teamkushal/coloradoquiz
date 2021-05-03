import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2737Component } from './test-component2737.component';

describe('TestComponent2737Component', () => {
  let component: TestComponent2737Component;
  let fixture: ComponentFixture<TestComponent2737Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2737Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2737Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
