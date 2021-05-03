import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3896Component } from './test-component3896.component';

describe('TestComponent3896Component', () => {
  let component: TestComponent3896Component;
  let fixture: ComponentFixture<TestComponent3896Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3896Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3896Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
