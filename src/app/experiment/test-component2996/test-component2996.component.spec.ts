import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2996Component } from './test-component2996.component';

describe('TestComponent2996Component', () => {
  let component: TestComponent2996Component;
  let fixture: ComponentFixture<TestComponent2996Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2996Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2996Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
