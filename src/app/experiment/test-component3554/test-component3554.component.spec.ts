import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3554Component } from './test-component3554.component';

describe('TestComponent3554Component', () => {
  let component: TestComponent3554Component;
  let fixture: ComponentFixture<TestComponent3554Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3554Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3554Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
