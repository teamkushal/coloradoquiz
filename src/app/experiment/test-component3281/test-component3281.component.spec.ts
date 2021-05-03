import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3281Component } from './test-component3281.component';

describe('TestComponent3281Component', () => {
  let component: TestComponent3281Component;
  let fixture: ComponentFixture<TestComponent3281Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3281Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
