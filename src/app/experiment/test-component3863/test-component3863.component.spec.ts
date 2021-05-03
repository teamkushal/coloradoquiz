import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3863Component } from './test-component3863.component';

describe('TestComponent3863Component', () => {
  let component: TestComponent3863Component;
  let fixture: ComponentFixture<TestComponent3863Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3863Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3863Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
