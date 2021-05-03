import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3228Component } from './test-component3228.component';

describe('TestComponent3228Component', () => {
  let component: TestComponent3228Component;
  let fixture: ComponentFixture<TestComponent3228Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3228Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
