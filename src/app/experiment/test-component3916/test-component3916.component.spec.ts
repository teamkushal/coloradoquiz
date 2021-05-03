import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3916Component } from './test-component3916.component';

describe('TestComponent3916Component', () => {
  let component: TestComponent3916Component;
  let fixture: ComponentFixture<TestComponent3916Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3916Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3916Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
