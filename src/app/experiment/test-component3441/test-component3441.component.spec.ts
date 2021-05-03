import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3441Component } from './test-component3441.component';

describe('TestComponent3441Component', () => {
  let component: TestComponent3441Component;
  let fixture: ComponentFixture<TestComponent3441Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3441Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3441Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
