import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent681Component } from './test-component681.component';

describe('TestComponent681Component', () => {
  let component: TestComponent681Component;
  let fixture: ComponentFixture<TestComponent681Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent681Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent681Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
