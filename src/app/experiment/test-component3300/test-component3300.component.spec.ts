import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3300Component } from './test-component3300.component';

describe('TestComponent3300Component', () => {
  let component: TestComponent3300Component;
  let fixture: ComponentFixture<TestComponent3300Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3300Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
