import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3000Component } from './test-component3000.component';

describe('TestComponent3000Component', () => {
  let component: TestComponent3000Component;
  let fixture: ComponentFixture<TestComponent3000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3000Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
