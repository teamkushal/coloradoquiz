import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent970Component } from './test-component970.component';

describe('TestComponent970Component', () => {
  let component: TestComponent970Component;
  let fixture: ComponentFixture<TestComponent970Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent970Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent970Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
