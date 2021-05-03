import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2188Component } from './test-component2188.component';

describe('TestComponent2188Component', () => {
  let component: TestComponent2188Component;
  let fixture: ComponentFixture<TestComponent2188Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2188Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
