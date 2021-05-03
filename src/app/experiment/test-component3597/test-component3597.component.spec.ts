import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3597Component } from './test-component3597.component';

describe('TestComponent3597Component', () => {
  let component: TestComponent3597Component;
  let fixture: ComponentFixture<TestComponent3597Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3597Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3597Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
