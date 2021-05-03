import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1712Component } from './test-component1712.component';

describe('TestComponent1712Component', () => {
  let component: TestComponent1712Component;
  let fixture: ComponentFixture<TestComponent1712Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1712Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1712Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
