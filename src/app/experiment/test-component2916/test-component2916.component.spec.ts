import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2916Component } from './test-component2916.component';

describe('TestComponent2916Component', () => {
  let component: TestComponent2916Component;
  let fixture: ComponentFixture<TestComponent2916Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2916Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2916Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
