import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2913Component } from './test-component2913.component';

describe('TestComponent2913Component', () => {
  let component: TestComponent2913Component;
  let fixture: ComponentFixture<TestComponent2913Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2913Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2913Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
