import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3040Component } from './test-component3040.component';

describe('TestComponent3040Component', () => {
  let component: TestComponent3040Component;
  let fixture: ComponentFixture<TestComponent3040Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3040Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3040Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
