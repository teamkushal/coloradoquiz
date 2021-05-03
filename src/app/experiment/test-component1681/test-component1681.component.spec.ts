import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1681Component } from './test-component1681.component';

describe('TestComponent1681Component', () => {
  let component: TestComponent1681Component;
  let fixture: ComponentFixture<TestComponent1681Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1681Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1681Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
