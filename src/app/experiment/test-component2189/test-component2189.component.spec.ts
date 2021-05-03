import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2189Component } from './test-component2189.component';

describe('TestComponent2189Component', () => {
  let component: TestComponent2189Component;
  let fixture: ComponentFixture<TestComponent2189Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2189Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
