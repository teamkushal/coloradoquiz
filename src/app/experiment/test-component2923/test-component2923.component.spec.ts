import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2923Component } from './test-component2923.component';

describe('TestComponent2923Component', () => {
  let component: TestComponent2923Component;
  let fixture: ComponentFixture<TestComponent2923Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2923Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2923Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
