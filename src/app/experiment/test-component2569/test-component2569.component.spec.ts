import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2569Component } from './test-component2569.component';

describe('TestComponent2569Component', () => {
  let component: TestComponent2569Component;
  let fixture: ComponentFixture<TestComponent2569Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2569Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2569Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
