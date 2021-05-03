import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3167Component } from './test-component3167.component';

describe('TestComponent3167Component', () => {
  let component: TestComponent3167Component;
  let fixture: ComponentFixture<TestComponent3167Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3167Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
