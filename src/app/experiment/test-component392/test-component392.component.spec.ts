import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent392Component } from './test-component392.component';

describe('TestComponent392Component', () => {
  let component: TestComponent392Component;
  let fixture: ComponentFixture<TestComponent392Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent392Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent392Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
