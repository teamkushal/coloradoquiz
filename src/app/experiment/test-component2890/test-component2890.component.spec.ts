import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2890Component } from './test-component2890.component';

describe('TestComponent2890Component', () => {
  let component: TestComponent2890Component;
  let fixture: ComponentFixture<TestComponent2890Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2890Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2890Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
