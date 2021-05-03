import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3982Component } from './test-component3982.component';

describe('TestComponent3982Component', () => {
  let component: TestComponent3982Component;
  let fixture: ComponentFixture<TestComponent3982Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3982Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3982Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
