import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3695Component } from './test-component3695.component';

describe('TestComponent3695Component', () => {
  let component: TestComponent3695Component;
  let fixture: ComponentFixture<TestComponent3695Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3695Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3695Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
