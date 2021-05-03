import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2259Component } from './test-component2259.component';

describe('TestComponent2259Component', () => {
  let component: TestComponent2259Component;
  let fixture: ComponentFixture<TestComponent2259Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2259Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2259Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
