import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3555Component } from './test-component3555.component';

describe('TestComponent3555Component', () => {
  let component: TestComponent3555Component;
  let fixture: ComponentFixture<TestComponent3555Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3555Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3555Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
