import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3847Component } from './test-component3847.component';

describe('TestComponent3847Component', () => {
  let component: TestComponent3847Component;
  let fixture: ComponentFixture<TestComponent3847Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3847Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3847Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
