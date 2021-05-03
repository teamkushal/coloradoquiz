import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1080Component } from './test-component1080.component';

describe('TestComponent1080Component', () => {
  let component: TestComponent1080Component;
  let fixture: ComponentFixture<TestComponent1080Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1080Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1080Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
