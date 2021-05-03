import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2075Component } from './test-component2075.component';

describe('TestComponent2075Component', () => {
  let component: TestComponent2075Component;
  let fixture: ComponentFixture<TestComponent2075Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2075Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2075Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
