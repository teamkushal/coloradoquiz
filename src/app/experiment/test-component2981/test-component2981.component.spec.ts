import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2981Component } from './test-component2981.component';

describe('TestComponent2981Component', () => {
  let component: TestComponent2981Component;
  let fixture: ComponentFixture<TestComponent2981Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2981Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2981Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
