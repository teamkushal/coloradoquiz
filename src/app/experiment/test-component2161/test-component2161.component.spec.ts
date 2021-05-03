import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2161Component } from './test-component2161.component';

describe('TestComponent2161Component', () => {
  let component: TestComponent2161Component;
  let fixture: ComponentFixture<TestComponent2161Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2161Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
