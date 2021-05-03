import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3952Component } from './test-component3952.component';

describe('TestComponent3952Component', () => {
  let component: TestComponent3952Component;
  let fixture: ComponentFixture<TestComponent3952Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3952Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3952Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
