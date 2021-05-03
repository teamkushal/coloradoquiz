import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent511Component } from './test-component511.component';

describe('TestComponent511Component', () => {
  let component: TestComponent511Component;
  let fixture: ComponentFixture<TestComponent511Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent511Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent511Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
