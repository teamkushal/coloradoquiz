import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1576Component } from './test-component1576.component';

describe('TestComponent1576Component', () => {
  let component: TestComponent1576Component;
  let fixture: ComponentFixture<TestComponent1576Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1576Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1576Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
