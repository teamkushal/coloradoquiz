import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2772Component } from './test-component2772.component';

describe('TestComponent2772Component', () => {
  let component: TestComponent2772Component;
  let fixture: ComponentFixture<TestComponent2772Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2772Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2772Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
