import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3220Component } from './test-component3220.component';

describe('TestComponent3220Component', () => {
  let component: TestComponent3220Component;
  let fixture: ComponentFixture<TestComponent3220Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3220Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
