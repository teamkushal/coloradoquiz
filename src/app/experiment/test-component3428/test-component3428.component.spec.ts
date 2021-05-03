import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3428Component } from './test-component3428.component';

describe('TestComponent3428Component', () => {
  let component: TestComponent3428Component;
  let fixture: ComponentFixture<TestComponent3428Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3428Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3428Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
