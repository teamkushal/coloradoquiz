import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1698Component } from './test-component1698.component';

describe('TestComponent1698Component', () => {
  let component: TestComponent1698Component;
  let fixture: ComponentFixture<TestComponent1698Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1698Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1698Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
