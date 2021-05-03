import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3921Component } from './test-component3921.component';

describe('TestComponent3921Component', () => {
  let component: TestComponent3921Component;
  let fixture: ComponentFixture<TestComponent3921Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3921Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3921Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
