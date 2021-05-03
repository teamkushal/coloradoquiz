import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2836Component } from './test-component2836.component';

describe('TestComponent2836Component', () => {
  let component: TestComponent2836Component;
  let fixture: ComponentFixture<TestComponent2836Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2836Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2836Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
