import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3823Component } from './test-component3823.component';

describe('TestComponent3823Component', () => {
  let component: TestComponent3823Component;
  let fixture: ComponentFixture<TestComponent3823Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3823Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3823Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
