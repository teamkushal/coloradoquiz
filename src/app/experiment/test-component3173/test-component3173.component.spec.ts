import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3173Component } from './test-component3173.component';

describe('TestComponent3173Component', () => {
  let component: TestComponent3173Component;
  let fixture: ComponentFixture<TestComponent3173Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3173Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
